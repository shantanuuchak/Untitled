import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiMap2Fill,
  RiPhoneLine,
  RiChat3Line,
} from "react-icons/ri";

function Aside() {
  const contactInfo = [
    {
      id: 0,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
      icon: <RiChat3Line size={25} className="text-lime-800" />,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: <RiMap2Fill size={25} className="text-lime-800" />,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: <RiPhoneLine size={25} className="text-lime-800" />,
    },
  ];

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        {contactInfo.map((info) => {
          return (
            <div key={info.id} className="mb-5">
              <h3 className="text-lg font-bold">
                {info.icon} {info.title}
              </h3>
              <p className="mb-2 text-slate-700">{info.description}</p>
              <p>{info.action}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-1 text-lime-700">
        <a href="#">
          <RiFacebookCircleLine size={25} />
        </a>
        <a href="#">
          <RiTwitterXLine size={25} />
        </a>
        <a href="#">
          <RiLinkedinBoxLine size={25} />
        </a>
      </div>
    </section>
  );
}

export default Aside;
