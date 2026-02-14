import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceConfig {
    type: DeviceType;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    // Animation intensity multipliers
    parallaxIntensity: number;
    animationDuration: number;
    transformDistance: number;
}

export const useDeviceType = (): DeviceConfig => {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setDeviceType('mobile');
            } else if (width < 1025) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
        };

        // Check on mount
        checkDevice();

        // Check on resize
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Return device-specific configuration
    const config: DeviceConfig = {
        type: deviceType,
        isMobile: deviceType === 'mobile',
        isTablet: deviceType === 'tablet',
        isDesktop: deviceType === 'desktop',
        // Animation intensity based on device
        parallaxIntensity: deviceType === 'mobile' ? 0 : deviceType === 'tablet' ? 0.5 : 1,
        animationDuration: deviceType === 'mobile' ? 0.9 : deviceType === 'tablet' ? 0.95 : 1,
        transformDistance: deviceType === 'mobile' ? 12 : deviceType === 'tablet' ? 16 : 20,
    };

    return config;
};
