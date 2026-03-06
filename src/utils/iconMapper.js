/**
 * Icon Mapper Utility
 * Maps icon identifier strings to Heroicon components
 */

import { 
  SparklesIcon, 
  AdjustmentsHorizontalIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  SunIcon, 
  UserGroupIcon,
  BeakerIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

const iconMap = {
  sparkles: SparklesIcon,
  adjustments: AdjustmentsHorizontalIcon,
  shield: ShieldCheckIcon,
  cube: CubeIcon,
  sun: SunIcon,
  users: UserGroupIcon,
  beaker: BeakerIcon,
  squares: Squares2X2Icon,
};

/**
 * Get icon component from identifier string
 * @param {string} iconName - Icon identifier from config
 * @returns {React.Component} Icon component
 */
export const getIcon = (iconName) => {
  return iconMap[iconName] || SparklesIcon; // Default to Sparkles if not found
};

export default getIcon;
