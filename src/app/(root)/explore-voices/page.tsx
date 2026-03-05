import ExploreVoicesView from "@/app/features/explore-voices/views/ExploreVoicesView";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Explore Voices" };

const page = () => {
  return  <ExploreVoicesView /> 
};

export default page;
