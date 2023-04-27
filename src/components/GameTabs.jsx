import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Example() {
  const data = [
    {
      label: "Name",
      value: "Name",
    },
    {
      label: "Genre",
      value: "Genre",
    },

    {
      label: "Popularity",
      value: "Popularity",
    },

    {
      label: "Release",
      value: "Release",
    },

    {
      label: "Developer",
      value: "Developer",
    },
  ];

  return (
    <div className="mx-[20rem] mt-[5rem]">
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
