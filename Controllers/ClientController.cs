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
        private readonly ApplicationDbContext _appContext;
        public ClientController(ApplicationDbContext appContext)
        {
            _appContext = appContext;
        }
        // GET: api/Client
        [HttpGet]
        public async Task<IEnumerable<Client>> Get([FromQuery]string city, [FromQuery] string firstName)
        {
            IEnumerable<Client> clients;
            if(city is null)
            {
                if (firstName is null)
                    clients = await _appContext.Clients.ToListAsync();
                else
                    clients = await _appContext.Clients.Where(c => c.FirstName == firstName).ToListAsync();
            }
            else
            {
                if(firstName is null)
                    clients = await _appContext.Clients.Where(c => c.City == city).ToListAsync();
                else
                    clients = await _appContext.Clients
                        .Where(c => c.City == city && c.FirstName == firstName)
                        .ToListAsync();
            }

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
        public async void Post([FromBody] Client client)
        {
            await _appContext.Clients.AddAsync(client);
            await _appContext.SaveChangesAsync();
        }

        // PUT: api/Client
        [HttpPut]
        public async void Put([FromBody] Client client)
        {
            await _appContext.Clients.AddAsync(client);
            await _appContext.SaveChangesAsync();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var client = Get(id).Result;

            _appContext.Clients.Remove(client);
            _appContext.SaveChanges();
        }
    }
}
