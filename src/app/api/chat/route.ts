import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/env.mjs';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    if (!env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key is not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          'HTTP-Referer': env.SITE_URL || 'http://localhost:3000',
          'X-Title': 'Saurav Sirsat Portfolio Chatbot',
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are the professional assistant for Saurav Sirsat's portfolio. 
Saurav is a Software Developer & Backend Engineer specialized in Java, Spring Boot, and Microservices.

Key Skills: Java 8+, Spring Boot, Spring Security, Microservices, REST APIs, SQL, MySQL, Redis, Hibernate, Docker, Apache Spark, PySpark, Git, Maven, JUnit, C++.

Experience:
- Software Developer Intern at Abhyaz Matlab (Backend services, SQL tuning, Redis).
- Software Developer Intern at Intern Pixel (Feature development, debugging).

Projects:
- Multi-Tenant POS SaaS: Spring Boot/Hibernate, 60+ APIs, optimized SQL, Redis caching.
- Financial Insights SaaS: Data pipelines with Spark, Dockerized services.

Contact: saurav.sirsat@outlook.com | GitHub: saurav-sirsat

Guidelines:
- Provide helpful, technical information about Saurav's work.
- Be concise and professional.
- Build on the context of the current conversation.`

            },
            ...messages,
          ],
          temperature: 0.8,
          max_tokens: 500,
        }),
      }
    );

    if (!response.ok) {
      let errorMessage = 'Failed to get response from AI';
      try {
        const errorData = await response.json();
        errorMessage =
          errorData.error?.message || errorData.error || errorMessage;
        console.error('OpenRouter API error:', errorData);
      } catch {
        const errorText = await response.text();
        console.error('OpenRouter API error (text):', errorText);
        errorMessage = errorText || errorMessage;
      }
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
