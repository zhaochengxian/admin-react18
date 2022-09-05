export const removeEmptyParams = (args: any): string => {
    const keyList: Array<string> = Object.keys(args)
    keyList.forEach((item: string) => {
        if (args[item] === '') {
            delete args[item]
        }
    })
    return JSON.stringify(args)
}
