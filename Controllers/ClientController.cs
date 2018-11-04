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
    public class ClientController : ControllerBase
    {
        private readonly ApplicationContext _appContext;
        public ClientController(ApplicationContext appContext)
        {
            _appContext = appContext;
        }
        // GET: api/Client
        [HttpGet]
        public async Task<IEnumerable<Client>> Get()
        {
            var clients = await _appContext.Clients.ToListAsync();
            return clients;
        }

        // GET: api/Client/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<Client> Get(int id)
        {
            if (id < 1)
                BadRequest();

            var client = await _appContext.Clients.FirstOrDefaultAsync(c => c.Id == id);

            if (client is null)
                NotFound();

            return client;
        }

        // POST: api/Client
        [HttpPost]
        public void Post([FromBody] Client client)
        {
        }

        // PUT: api/Client/5
        [HttpPut]
        public async void Put([FromBody] Client client)
        {
            await _appContext.AddAsync(client);
            await _appContext.SaveChangesAsync();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            var client = Get(id);

            _appContext.Remove(client);
            await _appContext.SaveChangesAsync();
        }
    }
}
