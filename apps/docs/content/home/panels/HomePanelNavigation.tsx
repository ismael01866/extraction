import { Box, Breadcrumbs, NavigationMenu, Tabs } from 'extraction-ui';

export function HomePanelNavigation() {
  return (
    <Tabs className="tabs-sm" defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Nav Menu</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Breadcrumbs</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <Box className="pt-4">
          <NavigationMenu className="navigation-menu-sm">
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Section>
                    Account overview page
                  </NavigationMenu.Section>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Settings</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Sub defaultValue="sub1">
                    <NavigationMenu.List>
                      <NavigationMenu.Item value="sub1">
                        <NavigationMenu.Trigger>Sub 1</NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                          <NavigationMenu.Section>
                            Account overview page
                          </NavigationMenu.Section>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item value="sub2">
                        <NavigationMenu.Trigger>Sub 2</NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                          <NavigationMenu.Section>
                            Pending reviews are slowing delivery
                          </NavigationMenu.Section>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    </NavigationMenu.List>
                    <NavigationMenu.Viewport />
                  </NavigationMenu.Sub>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="https://www.google.com"
                  target="_blank"
                >
                  Google
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.ViewportAnchor>
              <NavigationMenu.Viewport />
            </NavigationMenu.ViewportAnchor>
          </NavigationMenu>
        </Box>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <Box>
          <Breadcrumbs className="breadcrumbs-sm">
            <Breadcrumbs.List>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Separator />
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Profile</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Separator />
              <Breadcrumbs.Item>
                <Breadcrumbs.Link href="#">Settings</Breadcrumbs.Link>
              </Breadcrumbs.Item>
            </Breadcrumbs.List>
          </Breadcrumbs>
        </Box>
      </Tabs.Content>
    </Tabs>
  );
}
