import PageHeader from "@/components/page-header"; 
import Guestbook from "@/components/Guestbook";


export const dynamic = "force-dynamic";
export default function GuestbookPage() {
  

  return (
  
    <div className="mx-auto max-w-4xl p-3 ">
      <PageHeader title="Guestbook" description="Sign my guestbook and leave me a comment, say hello or just 'I was here!'" />
     
      <Guestbook />
     
    </div>
  );
}

