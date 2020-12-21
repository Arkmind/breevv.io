const getColor = (value: number) => {
    var a = value / 100,
      b = (120 - 20) * a,
      c = b + 20;

    // Return a CSS HSL string
    return 'hsl('+c+', 100%, 50%)';
}

export default getColor