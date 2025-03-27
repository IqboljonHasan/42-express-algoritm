function leftRightDifferenceOn2(nums) {
    let res = [], l = 0, r = 0
    for (let i = 0; i < nums.length; i++) {
        l = 0
        r = 0
        for (let j = 0; j < nums.length; j++) {
            if (j < i) {
                l += nums[j]
            } else if (j > i) {
                r += nums[j]
            }
        }
        res[i] = r == l ? 0 : l > r ? -1 : 1
    }

    return res
}

function leftRightDifferenceOn(nums) {
    let res = [], l = 0, r = 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            for (let j = 0; j < nums.length; j++) {
                if (j < i) {
                    l += nums[j]
                } else if (j > i) {
                    r += nums[j]
                }
            }
        }
        else {
            l += nums[i-1]
            r -= nums[i]
        }
        res[i] = r == l ? 0 : l > r ? -1 : 1
    }

    return res
}

