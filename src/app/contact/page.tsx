import Contact from "@/components/contact";
import PageHeader from "@/components/page-header";

const ContactPage = () => {
  return (
    <div>
      <div className="container max-w-4xl py-3 lg:py-10">
      
      <PageHeader
        title="Contact"
        description=""
       />  <hr className="my-2"></hr>
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage