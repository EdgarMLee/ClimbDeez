require_once('vendor/autoload.php');

use type Facebook\HackRouter\{Route, Router};

async function main(): Awaitable<noreturn> {
    $router = new Router(req());

    $route = Route\get('/', async function(): Awaitable<string> {
        return 'Hello, world!';
    });

    $router->addRoute($route);

    await $router->route();
}

<<__EntryPoint>>
async function run(): Awaitable<void> {
    \HH\Asio\join(main());
}
