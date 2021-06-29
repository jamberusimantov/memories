export interface ILoginFormData {
    email: string,
    password: string,
    password1?: string,
    name?: string,
    phone?: string,
}
export const mockLoginFormData = {
    email: '',
    name: '',
    password: '',
    password1: '',
    phone: '',
}
export interface ICustomTheme {
    primaryColor: string,
    secondaryColor?: string,
    emphasizeColor?: string,
    polygonHeight?: number,
    polygonWidth?: number,
    polygonOpacity?: number,
}
export const mockCustomTheme = {
    primaryColor: '#4078c0',
    secondaryColor: '#F4CBB2',
    emphasizeColor: '#`f5f5f5',
    polygonHeight: 450,
    polygonWidth: 540,
    polygonOpacity: 1,
}