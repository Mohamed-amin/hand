# HAND for faster utilities
Well, lodash is amazing, but it got bloated with code than in 99% of situations, I don't need. and sometimes I just need that simple `_.get` or `_.flatten' that just covers the straight cases without having support for all data types in js!
to get a better vision of the problem, read this.
[Beware of Lodash (and the cost of abstractions)](http://odino.org/beware-of-lodash-and-the-cost-of-abstractions/)

To be proitritized later but here is the list of functions that we use the most.
feel free to suggest more, taking into consideration is that project is not here to create another lodash, but we are just providing a ready-done functions recipes that we use every day at the ultimate performance possible.

Done:
- [x] _.get

TODO:
- [ ] _.cloneDeep
- [ ] _.pick
- [ ] _.map
- [ ] _.filter
- [ ] _.unqueBy
- [ ] _.camelCase
- [ ] _.find
- [ ] _.range
- [ ] _.isEqual
- [ ] _.debounce
- [ ] _.includes
- [ ] _.flatten
- [ ] _.isPlainObject