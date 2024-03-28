import { useState } from "react";
import { Stepper, Button, Group, Text } from "@mantine/core";

function Stepperr() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} m={50} color="red">
        <Stepper.Step
          label="First step"
          description={
            <Text
              sx={{
                color: "green",
              }}
            >
              Create an account
            </Text>
          }
          sx={{
            color: "green",
          }}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description={
            <Text
              sx={{
                color: "orange",
              }}
            >
              Verify email
            </Text>
          }
          sx={{
            color: "orange",
          }}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description={
            <Text
              sx={{
                color: "purple",
              }}
            >
              Get full access
            </Text>
          }
          sx={{
            color: "purple",
          }}
        >
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group mt="xl" ml="20rem">
        <Button onClick={prevStep} mr={500}>
          Back
        </Button>
        <Button onClick={nextStep}>Next</Button>
      </Group>
    </>
  );
}

export default Stepperr;
