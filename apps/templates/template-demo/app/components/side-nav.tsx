import { Icon, IconButton, Separator, Tooltip } from 'extraction-ui';
import {
  LuBookOpen,
  LuBookText,
  LuCircleHelp,
  LuHouse,
  LuLayoutGrid,
  LuMessageCircle,
} from 'react-icons/lu';

const NAV_ITEMS = [
  { type: 'link', title: 'Home', icon: LuHouse },
  { type: 'link', title: 'Components', icon: LuLayoutGrid },
  { type: 'link', title: 'Documentation', icon: LuBookOpen },

  { type: 'separator' },

  { type: 'link', title: 'Guides', icon: LuBookText },
  { type: 'link', title: 'API Reference', icon: LuBookOpen },

  { type: 'separator' },

  { type: 'link', title: 'Send Feedback', icon: LuMessageCircle },
  { type: 'link', title: 'Help & Support', icon: LuCircleHelp },
];

export const SideNav = () => (
  <>
    {NAV_ITEMS.map(({ type, title, icon }, index) =>
      type === 'separator' ? (
        <Separator key={`separator-${index}`} className="opacity-subtle my-3" />
      ) : (
        <Tooltip.Provider key={title} delayDuration={0}>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton key={title} className="variant-ghost palette-neutral rounded-sm">
                <Icon as={icon} />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content side="right">
                {title}
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip>
        </Tooltip.Provider>
      ),
    )}
  </>
);
