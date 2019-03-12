/* Remove duplicates from an array/object
    @param - array/boject fwhich may have duplicate value
    return - array/object after removal of duplicates
*/
    function removeDuplicates(dupArr) {
        var uniqueArr = [];
        $.each(dupArr, function (i, el) {
            if ($.inArray(el, uniqueArr) === -1) uniqueArr.push(el);
        });
        return uniqueArr;
}
