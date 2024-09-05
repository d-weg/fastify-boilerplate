

export const parseBoolean = (value: unknown) => {
    if(!value) return false

    if(value === 'true') return true

    if(value === 'false') return false

    return true
}