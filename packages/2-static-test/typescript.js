function add(a, b) {
    return a + b;
}
function getFullName(user) {
    var _a = user.name, first = _a.first, middle = _a.middle, last = _a.last;
    return [first, middle, last].filter(Boolean).join('');
}
add(1, 2);
getFullName({ name: { first: 'Joe', middle: 'Bud', last: 'Matthews' } });
