import { useLocation } from "react-router-dom";

export function Truncate(input, length) {
    if (input.length > length) {
        return input.substring(0, length) + '...';
    }
    return input;
};
export function UseLastPathname() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  }