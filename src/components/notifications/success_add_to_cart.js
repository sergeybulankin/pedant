export function success({top = 0, right = 0, className, html}) {
    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) notification.classList.add(className);

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.style.position = 'absolute';
    notification.style.backgroundColor = '#34c992';
    notification.style.boxShadow = '0 11px 17px 0 rgba(23,32,61,.13)';
    notification.style.borderRadius = '2px';
    notification.style.padding = '8px';
    notification.style.fontSize = '1.3em';
    notification.style.textAlign = 'left';
    notification.style.color = 'white';
    notification.style.animationName = 'bounceIn';
    notification.style.animationDuration = '600ms';
    notification.style.animationIterationCount = '1';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => {notification.remove()}, 1500);
}