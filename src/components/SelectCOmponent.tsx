import { Select } from "@mantine/core";

export default function SelectComponent() {
  return (
    <Select
      label="Your favorite frameworks"
      placeholder="Pick one"
      ml={500}
      mt={100}
      data={[
        { value: "alice", label: "Alice" },
        { value: "bob", label: "Bob" },
        { value: "charlie", label: "Charlie" },
        { value: "diana", label: "Diana" },
        { value: "eve", label: "Eve" },
        { value: "fred", label: "Fred" },
        { value: "grace", label: "Grace" },
        { value: "henry", label: "Henry" },
        { value: "isla", label: "Isla" },
        { value: "jack", label: "Jack" },
      ]}
      styles={{
        dropdown: {
          verticalAlign: "top",
          overflowY: "auto",
          maxHeight: 200,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        input: {
          width: "20rem",
        },
        rightSection: {
          marginRight: "29rem",
        },
      }}
    />
  );
}
