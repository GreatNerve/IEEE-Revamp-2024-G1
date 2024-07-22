import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
    return (
        <section className="pt-12 md:pt-16 px-12 md:px-24">
            <h2 className="text-2xl  md:text-5xl font-bold mb-4 md:mb-6 mt-8">
                Frequently asked questions
            </h2>
            <div className="px-6">
                <Accordion type="single" collapsible>
                   {
                          items.map((item, i) => (
                            <AccordionItem key={i} value={item.title}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>{item.description}</AccordionContent>
                            </AccordionItem>
                        ))
                   }
                  
                </Accordion>
            </div>
        </section>
    );
}

export default Faq;


const items = [{
    title: "What are the benefits of joining IEEE?",
    description: "IEEE membership offers access to technical innovation, cutting-edge information, networking opportunities, and exclusive member benefits. Members support IEEE's mission to advance technology for humanity and the profession, while memberships build a platform to introduce technology careers to students around the world.",
},
{
    title: "How can I access IEEE research papers and publications?",
    description: "IEEE Xplore is a digital library for research papers and publications. It provides access to over 5 million documents, including journals, conference papers, and standards. IEEE Xplore is a powerful resource for discovery and access to scientific and technical content published by the IEEE and its publishing partners.",
},
{
    title: "What conferences and events does IEEE organize?",
    description: "IEEE organizes over 1,800 conferences and events each year, including the IEEE International Conference on Robotics and Automation, the IEEE International Conference on Communications, and the IEEE International Conference on Computer Vision. These conferences provide opportunities for researchers, engineers, and students to present and discuss their work, network with peers, and learn about the latest developments in their fields.",

},
{
    title: "How can I access IEEE educational resources?",
    description: "IEEE offers a wide range of educational resources, including online courses, webinars, tutorials, and certification programs. IEEE also publishes educational books, journals, and magazines on a variety of topics in engineering, technology, and computer science. These resources are designed to help students, researchers, and professionals stay current with the latest developments in their fields.",
}
]