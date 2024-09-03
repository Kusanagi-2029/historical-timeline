export interface ArrowButtonProps {
  onClick: () => void;
  disabled: boolean;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

export interface DateDisplayProps {
  activePeriod: number;
  totalPeriods: number;
}

export interface EventCardStyles {
  eventCard: string;
  eventDate: string;
  eventDescription: string;
}

export interface EventCardProps {
  date: string;
  description: string;
  styles: EventCardStyles;
}

export interface ThemeDisplayProps {
  theme: string;
  isMobile: boolean;
  themeContainerDesktop: string;
  themeContainerMobile: string;
}

export interface NavButtonContainerProps {
  isMobile?: boolean;
  onNavigate: (path: string) => void;
}

export interface NavButtonProps {
  isErrorPage?: boolean;
  text: string;
  onClick: () => void;
}

export interface TitleProps {
  isMobile?: boolean;
  text: string;
}
