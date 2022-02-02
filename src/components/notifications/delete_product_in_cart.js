export function showDeleteProduct({top = 0, right = 0, className, html, color}) {
    let notification = document.createElement('div');
    notification.className = "delete";
    if (className) notification.classList.add(className);

    notification.style.right = right + 'px';
    notification.style.top = top + 'px';
    notification.style.position = 'static';
    notification.style.backgroundColor = color;
    notification.style.boxShadow = '0 11px 17px 0 rgba(23,32,61,.13)';
    notification.style.borderRadius = '5px';
    notification.style.padding = '8px';
    notification.style.fontSize = '1.3em';
    notification.style.textAlign = 'left';
    notification.style.color = 'black';
    notification.style.animationName = 'bounceIn';
    notification.style.animationDuration = '600ms';
    notification.style.animationIterationCount = '1';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => {notification.remove()}, 1500);
}