import { Field, HStack, Input, Password, Select, VStack } from 'extraction-ui';
import { LuCheck } from 'react-icons/lu';

export function HomePanelForms() {
  return (
    <VStack>
      <HStack className="w-full">
        <Field className="field-sm w-full">
          <Input id="name" placeholder="Name" />
        </Field>
        <Select>
          <Select.Trigger
            aria-label="select-trigger"
            className="select-trigger-sm"
          >
            <Select.Value placeholder="Choose..." />
            <Select.Icon />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="select-content-sm">
              <Select.ScrollUpButton />
              <Select.Viewport>
                <Select.Section>
                  <Select.Group>
                    <Select.Label>Group 1</Select.Label>
                    <Select.Item value="op1">
                      <Select.ItemText>Option 1</Select.ItemText>
                      <Select.ItemIndicator>
                        <LuCheck />
                      </Select.ItemIndicator>
                    </Select.Item>
                    <Select.Item value="op2">
                      <Select.ItemText>Option 2</Select.ItemText>
                      <Select.ItemIndicator>
                        <LuCheck />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>
                </Select.Section>
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Portal>
        </Select>
      </HStack>
      <Field className="field-sm w-full">
        <Password>
          <Password.Input placeholder="Password" />
          <Password.Toggle>
            <Password.Icon />
          </Password.Toggle>
        </Password>
      </Field>
    </VStack>
  );
}
