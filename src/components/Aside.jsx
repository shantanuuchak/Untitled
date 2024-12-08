import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandLine,
  IconMap2,
  IconPhone,
} from "@tabler/icons-react";

function Aside() {
  const features = [
    {
      id: 0,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
      icon: <IconBrandLine />,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: <IconMap2 />,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: <IconPhone />,
    },
  ];

  return (
    <section className="flex flex-col justify-between h-full">
      <div>
        {features.map((feature) => {
          return (
            <div key={feature.id} className="mb-5">
              <h3 className="text-lg font-bold">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-slate-700 mb-2">{feature.description}</p>
              <p>{feature.action}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-1 text-lime-600">
        <a href="#">
          <IconBrandFacebook />
        </a>
        <a href="#">
          <IconBrandX />
        </a>
        <a href="#">
          <IconBrandLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Aside;
