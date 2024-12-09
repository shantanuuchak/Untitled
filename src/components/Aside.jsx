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
      icon: <IconBrandLine className="text-green-950" />,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: <IconMap2 className="text-green-950" />,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: <IconPhone className="text-green-950" />,
    },
  ];

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        {features.map((feature) => {
          return (
            <div key={feature.id} className="mb-5">
              <h3 className="text-lg font-bold">
                {feature.icon} {feature.title}
              </h3>
              <p className="mb-2 text-slate-700">{feature.description}</p>
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
