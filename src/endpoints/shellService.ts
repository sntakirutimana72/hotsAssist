const BASE_URL = `${process.env.HOT_ASSIST_SERVICE_URL}/shell?cmd=`;

const resolveUrl = (param: string): string => `${BASE_URL}${param}`;

const executeInShell = async (command: string): Promise<boolean> => {
  const response = await fetch(resolveUrl(command));
  return response.ok;
};

export default executeInShell;
