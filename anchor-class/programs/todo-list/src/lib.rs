use anchor_lang::prelude::*;

declare_id!("GTb2bhTGJJ6RXNfc9AcpHJzV6PAA23YXy5vyKJrJ9w17");

#[program]
pub mod todo_list {
    use super::*;
    //instructions
    pub fn initialize_task_list(ctx: Context<InitializeTaskList>) -> Result<()> {
        let task_list: &mut Account<TaskList> = &mut ctx.accounts.task_list;
        task_list.owner = *ctx.accounts.user.key;
        task_list.task_count = 0;
        Ok(())
    }
    pub fn new_task(ctx: Context<AddTask>, _name: String) -> Result<()> {
        let task_list = &mut ctx.accounts.task_list;
        let _task = &mut ctx.accounts.task;
        task_list.task_count = 0;
        Ok(())
    }

    pub fn mark_task_complete(ctx: Context<MarkTaskComplete>) -> Result<()> {
        let task = &mut ctx.accounts.task;
        let task_list = &mut ctx.accounts.task_list;

        task.is_complete = true;

        require_eq!(task_list.owner, *ctx.accounts.user.key);

        Ok(())
    }

    pub fn delete_task(ctx: Context<DeleteTask>) -> Result<()> {
        let _task = &mut ctx.accounts.task;
        let task_list = &mut ctx.accounts.task_list;

        require_eq!(task_list.owner, *ctx.accounts.user.key);

        task_list.task_count -= 1;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct DeleteTask<'info> {
    #[account(mut, close = user)]
    pub task: Account<'info, Task>,
    #[account(mut)]
    pub task_list: Account<'info, TaskList>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct MarkTaskComplete<'info> {
    #[account(mut)]
    pub task: Account<'info, Task>,
    #[account(mut)]
    pub task_list: Account<'info, TaskList>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct AddTask<'info> {
    #[account(mut)]
    pub task_list: Account<'info, TaskList>,
    #[account(
        init,
        payer = user,
        space = 8 + 50 + 4,
        seeds = [b"task", task_list.key().as_ref(), &[task_list.task_count as u8]],
        bump
    )]
    pub task: Account<'info, Task>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitializeTaskList<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub task_list: Account<'info, TaskList>,
    #[account(mut)]
    // pub task: Account<'info, Test>,
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct TaskList {
    pub owner: Pubkey,
    pub task_count: u32,
}

#[account]
pub struct Task {
    pub task_id: u32,
    pub name: String,
    pub is_complete: bool,
}
// pub struct  Test<info>{
//     pub user: AccountInfo<info>
// }

// use anchor_lang::prelude::*;

// // This is your program's public key and it will update
// // automatically when you build the project.
// declare_id!("11111111111111111111111111111111");

// #[program]
// mod hello_anchor {
//     use super::*;
//     pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
//         ctx.accounts.new_account.data = data;
// msg!("Changed data to: {}!", data);
//         Ok(())
//     }
// }

// #[derive(Accounts)]
// pub struct Initialize<'info> {
//     // We must specify the space in order to initialize an account.
//     // First 8 bytes are default account discriminator,
//     // next 8 bytes come from NewAccount.data being type u64.
//     // (u64 = 64 bits unsigned integer = 8 bytes)
//     #[account(init, payer = signer, space = 8 + 8)]
//     pub new_account: Account<'info, NewAccount>,
//     #[account(mut)]
//     pub signer: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

// #[account]
// pub struct NewAccount {
//     data: u64
// }
