const isOverdue = (dueDate) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const due = new Date(dueDate).setHours(0, 0, 0, 0);
    return today > due;
};

export default isOverdue;