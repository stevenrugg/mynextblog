import Contact from '@/components/contact'
import PageHeader from '@/components/page-header';

export default function ContactPage() {
  return (
    <>
   <div className="mx-auto max-w-4xl p-1 text-primary">
    < PageHeader title="Contact" description="Quick Contact: steven@seattlesupergeek.io -- (206) 973-0748"/>
    </div>
    <Contact />
    </>
  )
}