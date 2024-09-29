import { StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type TRendererReturnType = ReturnType<NonNullable<StoryObj["render"]>>;
type TRendererClients = { queryClient: QueryClient };

export const createUiStory = (Renderer: React.FC<Record<string, unknown>>) => {
  const clients: TRendererClients = {
    queryClient: new QueryClient({
      defaultOptions: {
        mutations: {
          networkMode: "offlineFirst",
        },
        queries: {
          networkMode: "offlineFirst",
          retryOnMount: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
  };

  function RenderComponent(props: Record<string, unknown>) {
    return (
      <QueryClientProvider client={clients.queryClient}>
        <Renderer {...props} />
      </QueryClientProvider>
    ) as unknown as TRendererReturnType;
  }
  return { RenderComponent, storyClients: clients };
};
