import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Suspense } from "react";

export function Department() {
  return (
    <BentoGrid className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Computer Society Chapter",
    description: "The IEEE Computer Society Chapter is a subgroup of IEEE dedicated to advancing computing technology and fostering knowledge exchange among professionals and students in the field.",
    header: <Suspense fallback={<Skeleton />} >
      <img className="w-full h-full object-center rounded-xl" src="/images/department/cs.png" alt="Computer Society Chapter" />
    </Suspense>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Robotics and Automation Chapter",
    description: "The Robotics and Automation Chapter of IEEE focuses on advancing research, development, and application of robotics and automation technologies.",
    header: <Suspense fallback={<Skeleton />} >
      <img className="w-full h-full object-center rounded-xl" src="/images/department/RAS.svg" alt="Robotics and Automation Chapter" />
    </Suspense>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Circuits and Systems Chapter",
    description: "The Circuits and Systems Chapter of IEEE specializes in advancing the theory, design, and implementation of circuits and systems for various applications in electronics and technology.",
    header: <Suspense fallback={<Skeleton />} >
    <img className="w-full h-full object-center rounded-xl" src="/images/department/CAS.png" alt="Robotics and Automation Chapter" />
  </Suspense>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "WIE Affinity Group",
    description : "The Women in Engineering Affinity Group of IEEE promotes gender diversity and supports professional development for women in engineering and technology fields.",
    header: <Suspense fallback={<Skeleton />} >
      <img className="w-full h-full object-center rounded-xl" src="/images/department/WIE.svg" alt="WIE Affinity Group" />
    </Suspense>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  }
];
