interface Env {
  KV: KVNamespace;
}

const json = [
  {
    templateId: 'd2c9777b-425e-4fb0-b490-d2888e1207a1',
    root: {
      id: 'ern:layout:vertical',
      properties: {},
    },
    slots: [
      {
        entity: {
          id: 'ern:content:greetings',
          slots: [],
          properties: {},
        },
      },
      {
        entity: {
          id: 'ern:content:greetings',
          slots: [],
          properties: {},
        },
      },
    ],
    tags: [],
    status: 'active',
  },
] as const;

export const onRequest: PagesFunction<Env> = async (context) => {
  const value = await context.env.KV.get('example');
  return new Response(
    JSON.stringify({
      data: json,
      value,
    })
  );
};
