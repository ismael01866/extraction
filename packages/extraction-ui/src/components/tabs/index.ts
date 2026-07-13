import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './tabs';

export type {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from './tabs.types';

export const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  List: TabsList,
  Trigger: TabsTrigger,
});
