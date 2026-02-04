import { Message } from '@/types/chat';

/**
 * API Configuration
 * Replace this URL with your actual backend API endpoint
 */
const _API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/chat';

/**
 * Send a message to the AI chat API
 * @param message - The user's message
 * @returns Promise with the AI's response
 */
export async function sendMessage(message: string): Promise<Message> {
  try {
    // TODO: Replace this mock implementation with actual API call
    // const response = await fetch(API_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message }),
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Failed to send message');
    // }
    //
    // const data = await response.json();
    // return {
    //   id: data.id,
    //   content: data.content,
    //   role: 'assistant',
    //   timestamp: new Date(data.timestamp),
    // };

    // Mock response for development
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      id: `msg-${Date.now()}`,
      content: `This is a mock AI response to: "${message}". Replace the sendMessage function in lib/api.ts with your actual API integration.`,
      role: 'assistant',
      timestamp: new Date(),
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message. Please try again.');
  }
}
