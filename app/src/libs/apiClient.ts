// /libs/apiClient.ts
// /libs/apiClient.ts
export const apiClient = async (url: string, options?: RequestInit) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';  // Asegurar que no es undefined
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || '';        // Asegurar que no es undefined

  if (!baseUrl) {
    throw new Error('API base URL is not defined');
  }

  if (!apiKey) {
    throw new Error('API key is not defined');
  }

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'API-Key': apiKey,  // Enviar la API key en el header 'API-Key'
      ...(options?.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};
