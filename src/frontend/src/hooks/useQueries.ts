import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { ContactSubmission } from "../backend.d";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  productInterest: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor(createActor);

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        return;
      }
      await actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.productInterest,
      );
    },
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
