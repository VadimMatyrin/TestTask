using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestTask.Models;

namespace TestTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientTasksController : ControllerBase
    {
        private readonly ApplicationDbContext _appContext;
        public ClientTasksController(ApplicationDbContext appContext)
        {
            _appContext = appContext;
        }
        // GET: api/ClientTasks
        [HttpGet]
        public async Task<IEnumerable<ClientTask>> Get()
        {
            var clientTasks = await _appContext.ClientTasks.ToListAsync();
            return clientTasks;
        }
        [HttpGet("{id}")]
        public async Task<ClientTask> Get(int id)
        {
            var clientTask = await _appContext.ClientTasks.FirstOrDefaultAsync(ct => ct.Id == id);

            if (clientTask is null)
                NotFound();

            return clientTask;
        }

        // GET: api/ClientTasks/5
        [HttpGet]
        [Route("[action]/{clientId}")]
        public async Task<IEnumerable<ClientTask>> GetClientsTasks(int clientId)
        {
            if (clientId < 1)
                BadRequest();

            var clientsTasks = await _appContext.ClientTasks.Where(ct => ct.ClientId == clientId).ToListAsync();
            return clientsTasks;
        }
        // POST: api/ClientTasks
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/ClientTasks
        [HttpPut]
        public async void Put([FromBody] ClientTask clientTask)
        {
            await _appContext.AddAsync(clientTask);
            await _appContext.SaveChangesAsync();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            var task = Get(id).GetAwaiter().GetResult();

            _appContext.ClientTasks.Remove(task);
            _appContext.SaveChanges();
        }
    }
}
