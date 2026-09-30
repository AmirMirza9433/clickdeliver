export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

/**
 * EDITABLE STATS CONFIGURATION
 */
export const STATS_DATA: StatItem[] = [
  {
    id: 'deliveries',
    value: 1000,
    suffix: '+',
    label: 'Completed Deliveries',
    sublabel: 'Alipur Chattha & nearby',
    highlight: true,
  },
  {
    id: 'customers',
    value: 2000,
    suffix: '+',
    label: 'Happy Customers',
    sublabel: 'Daily active users',
  },
  {
    id: 'riders',
    value: 50,
    suffix: '+',
    label: 'Active Captains & Riders',
    sublabel: 'On-demand & reliable',
  },
  {
    id: 'shops',
    value: 45,
    suffix: '+',
    label: 'Partner Stores',
    sublabel: 'Grocery, pharmacy & food',
  },
];
