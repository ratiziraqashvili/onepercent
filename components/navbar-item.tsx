import Image from "next/image";

export const NavbarItem = () => {
  const routes = [
    {
      label: "მთავარი",
      href: "/",
    },
    {
      label: "სრული კოლექცია",
      href: "/collections/all",
    },
  ];

  return (
    <>
      <div className="flex gap-7">
        <div>
          {/* <Image
                     src={}
                     alt="One Percent"
                    /> */}
          image here
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <ul key={route.href}>{route.label}</ul>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};
