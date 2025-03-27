function maxArea(nums) {
    let n = nums.length - 1
    if (n == 0) {
        return 0
    }
    let result, max = nums[0], first = true, left = 0, right = n, tr
    for (let i = 0; i <= n; i++) {
        if (first) {
            if (max < nums[right]) {
                tr = max * (right - left)
                max = nums[right]
                first = false
                left++
            }
            else {
                first = true
                tr = nums[right] * (right - left)
                right--
            }
        } else {
            if (nums[left] > max) {
                tr = max * (right - left)
                max = nums[left]
                first = true
                right--
            }
            else {
                first = false
                tr = nums[left] * (right - left)
                left++
            }
        }
        if (!result || result < tr) {
            result = tr
        }
    }
    return result
}

module.exports = { maxArea }
function maxArea(nums) {
    let n = nums.length - 1
    if (n == 0) {
        return 0
    }
    let result
    for (let i = 0; i <= n; i++) {
        let tempResult

        for (let j = i + 1; j <= n; j++) {
            if (nums[i] < nums[j]) {
                tempResult = nums[i] * (j - i)
            } else {
                tempResult = nums[j] * (j - i)
            }
            if (result) {
                if (result < tempResult) {
                    result = tempResult
                }
            } else result = tempResult
        }
    }
    return result
}
