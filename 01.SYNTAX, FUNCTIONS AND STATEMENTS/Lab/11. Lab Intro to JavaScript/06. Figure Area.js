function figureArea(w, h, W, H) {
    let figOneArea = w * h;
    let figTwoArea = W * H;
    let overlappingArea = Math.min(w, W) * Math.min(h, H)

    console.log(figOneArea + figTwoArea - overlappingArea);
}

figureArea(1, 1.01, 1, 1);