import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function WallOfWidom() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 flex flex-col gap-4">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-foreground/80 text-lg text-justify">
        Started back in 2001, IEEE-DIT has now grown into a multi-faceted chapter, empowering young engineers to enhance their skills and set up milestones in the history of IEEE NSUT. Our foremost objective is to create an environment which promotes students to learn technical knowledge, inculcate managerial skills and develop their overall personalities. We achieve this by sponsoring technical projects, providing opportunities to manage and organize events and to participate in various events and conferences at state as well as national level. IEEE-NSUT Student Branch works to create an atmosphere of technical excellence for the students. It aims at helping students in building an attitude towards applying engineering in daily life by learning ways to use the latest technology on offer.
        </p>
      </div>
      <div className="">
        <PORCards
          name="Prof. Prerna Gaur"
          position="Head Incharge"
          img="/Prerna-Gaur-2021.jpeg"
          message="I've learned a lot from her throughout my bachelor degree. Her leadership skills, teaching and technical abilities, and knowledge of the field are commendable."
          social={[
            // { icon: <FaGithub />, link: "https://github.com" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/anshul-goyal-a9b537254/" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
          ]}
        />
      </div>
    </div>
  );
}

function PORCards({
  name,
  position,
  img,
  message,
  social,
  isAlumni = false,
  paragraph,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-4 ml-5 flex flex-row gap-6 flex-wrap sm:flex-nowrap">
          <div className="w-36 h-36 rounded-full overflow-hidden relative">
            <Avatar className="w-36 h-36 select-none scale-125">
              <AvatarImage src={img} className="object-center" />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
          </div>
          <div className="items-start flex flex-col justify-center">
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-lg text-foreground/80">{position}</p>
            <div className="flex gap-4">
              {social.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="*:size-5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <blockquote className="mt-4 border-l-2 pl-4 italic">&quot;{message}&quot;</blockquote>
          <div><p className="text-foreground/80 text-lg text-justify">
              {paragraph || "I am Prof. Prerna Gaur faculty at NSUT, Delhi. I am the head incharge of IEEE NSUT. I have been associated with IEEE for the past 10 years. I have been guiding students in their technical projects and helping them in their technical journey."}
          </p></div>
        </div>
      </div>
      <hr className="my-4 border-foreground/20" />
    </div>
  );
}

export default WallOfWidom;
