import { HomeClient } from "@/components/HomeClient";

// Cette page est maintenant un Server Component
// Le contenu interactif est délégué au HomeClient
export default function Home() {
	return <HomeClient />;
}
