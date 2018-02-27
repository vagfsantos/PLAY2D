export interface GameInterface {

    __canvas: HTMLCanvasElement,
    __configuration: CanvasConfigurationInterface,

    __init(): void,
    __setUp(): void,
    __appendCanvasToBody(): void,
    
    create(): GameInterface,

    getCanvas(): HTMLCanvasElement,
    getConfiguration(): CanvasConfigurationInterface,

    setConfiguration(newConfiguration:CanvasConfigurationInterface): void

}

export interface CanvasConfigurationInterface {
    
    width: number,
    height: number
}