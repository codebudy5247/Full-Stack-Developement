- Each application has at least one module the root module.this is the starting point of application.

- A module is defined by annotating a class with the **@Module** decorator.

Module Properties.

- **providers** array of providers to be available within the module via dependency injection.

- **controllers** 
Array of controllers to be instantiated within the module.Responsible for handling incoming requests and returning responses to the client.
can take advantage of dependency injection to consume providers within the same module.

Defining handlers - @Get , @Post @Delete etc.

```javascript
@Controller(''/tasks)
export class TasksController {

}
```

**imports**
**exports**

CREATE module - nest g module module-name
