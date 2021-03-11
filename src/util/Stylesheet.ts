export function getTheme(themeName: string): string[] {
    return [
        `./assets/sass/index.sass`,
        `./assets/sass/index.${themeName}.sass`
    ];
}