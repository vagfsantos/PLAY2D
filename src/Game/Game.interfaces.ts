export interface GameInterface {

    __canvas: HTMLCanvasElement,
    __configuration: CanvasConfigurationInterface,

    __init(config: CanvasConfigurationInterface): void,
    __setUp(config: CanvasConfigurationInterface): void,
    __appendCanvasTo(selector: string): void,
    
    create(config: CanvasConfigurationInterface): GameInterface,

    getCanvas(): HTMLCanvasElement,
    getConfiguration(): CanvasConfigurationInterface,

    setConfiguration(newConfiguration:CanvasConfigurationInterface): void

}

export interface CanvasConfigurationInterface {

    name?: string,
    selector?: string,

    width?: number,
    height?: number
}